import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.pageView();
  }, [location]);

  return null;
};

export default PixelTracker;