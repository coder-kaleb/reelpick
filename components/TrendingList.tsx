import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
function TrendingList() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
        Autoplay({ delay: 4000, stopOnMouseEnter: true }),
    ]);
    return (
        <div>hi</div>
    );
}

export default TrendingList