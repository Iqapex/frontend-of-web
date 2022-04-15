import React from "react";
import Particles from "react-tsparticles";


export default function ParticleAnimation() {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div id="tsparticles">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        createLinearGradient: {
                            value: "to right, rgb(19, 106, 138), rgb(38, 120, 113)"    //rgb(0, 191, 143), rgb(0, 21, 16)    
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 4,
                                duration: 6,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.9
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#FFC702"
                        },
                        links: {
                            color: "rgb(201, 56, 3)",
                            distance: 250,
                            enable: true,
                            opacity: 1,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 0.7,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 40
                        },
                        opacity: {
                            value: 1
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }}
            />
        </div>
    )
}