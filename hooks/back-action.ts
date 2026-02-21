import { useEffect, useRef } from "react";

type BackHandler = () => void;

export function BackAction(onBack: BackHandler) {
  const onBackRef = useRef(onBack);

  // Selalu update ref ke versi terbaru onBack
  useEffect(() => {
    onBackRef.current = onBack;
  }, [onBack]);

  // Push dummy state SEKALI saat mount
  useEffect(() => {
    window.history.pushState({ interceptBack: true }, "");
  }, []);

  // Pasang listener SEKALI, gunakan ref agar selalu pakai handler terbaru
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.interceptBack) {
        window.history.pushState({ interceptBack: true }, "");
        onBackRef.current();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []); // kosong → hanya dipasang sekali
}
