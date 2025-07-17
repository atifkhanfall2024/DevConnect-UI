import { useState } from "react";
const ShimmerEffect = ()=>{
    const [loading, setLoading] = useState(() => {
    // Check if shimmer was already shown in this session
    return sessionStorage.getItem('shimmerShown') !== 'true';
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('shimmerShown', 'true'); // Mark shimmer as shown
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return <Shimmer />;
  }
}

export default ShimmerEffect