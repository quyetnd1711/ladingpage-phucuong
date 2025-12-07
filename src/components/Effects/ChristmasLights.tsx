import React from 'react';

const ChristmasLights: React.FC = () => {
    const lights = Array.from({ length: 20 }, (_, i) => i);
    const colors = ['#dc2626', '#16a34a', '#eab308', '#3b82f6', '#ec4899'];

    return (
        <div className="absolute top-0 left-0 w-full h-8 flex justify-around items-center z-10">
            {lights.map((light, index) => (
                <div
                    key={light}
                    className="christmas-light w-3 h-3 rounded-full shadow-glow"
                    style={{
                        backgroundColor: colors[index % colors.length],
                        animationDelay: `${index * 0.1}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default ChristmasLights;
