"use client";
import React from "react";

const GoogleMapsEmbed = ({
    location = "St. George Orthodox Syrian Church, Mudavoor",
    width = "100%",
    height = "500px",
}) => {
    // Using the same map URL as in your iframe
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31434.473238375704!2d76.53201984804258!3d9.99130131725844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e74f69cf1c2f%3A0xc13c5c5c4ad46!2sSt.%20George%20Orthodox%20Syrian%20Church%2C%20Mudavoor!5e0!3m2!1sen!2sin!4v1741664429779!5m2!1sen!2sin`;

    return (
        <div className="map-section">
            <div className="container mx-auto py-8">
                <div className="header-container mb-6">
                    <div className="vertical-line"></div>
                    <h1 className="text-3xl font-bold text-navy">Location</h1>
                </div>

                <div className="map-container">
                    <iframe
                        src={mapUrl}
                        width={width}
                        height={height}
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Google Map of ${location}`}
                        aria-label={`Google Map showing location of ${location}`}
                    />
                </div>
            </div>

            <style jsx>{`
                .map-section {
                    width: 100%;
                    position: relative;
                    padding: 1rem 0;
                }

                .header-container {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .vertical-line {
                    width: 6px;
                    height: 40px;
                    background-color: #e63946;
                    margin-right: 15px;
                }

                .text-navy {
                    color: #1a365d;
                }

                .map-container {
                    width: 100%;
                    max-width: ${width};
                    height: ${height};
                    border-radius: 4px;
                    overflow: hidden;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default GoogleMapsEmbed;
