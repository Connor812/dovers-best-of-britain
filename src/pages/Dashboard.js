import React, { useEffect, useState, useRef } from "react";
import { PostData } from "../utils/PostData";
import "../assets/css/dashboard.css";

function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [meatPies, setMeatPies] = useState([]);
    const [barcodesToRender, setBarcodesToRender] = useState([]);
    const renderedRef = useRef(false); // Track if we've already rendered barcodes

    useEffect(() => {
        // Fetch the meat pies from the API
        const fetchData = async () => {
            const result = await PostData("get-items-by-category.php", { category_id: "JU7PZOBDHTOGFRJRH6YXXWHV" });
            setMeatPies(result.objects);
            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Only start rendering barcodes if not already done, and if meatPies has been fetched
        if (!renderedRef.current && meatPies.length > 0) {
            // Sort meat pies in alphabetical order by name
            const sortedMeatPies = meatPies.sort((a, b) =>
                a.item_data.name.localeCompare(b.item_data.name)
            );
            renderBarcodesWithDelay(sortedMeatPies);
            renderedRef.current = true; // Set to true to avoid further renders
        }
    }, [meatPies]); // Runs when meatPies state updates

    const renderBarcodesWithDelay = (items) => {
        setBarcodesToRender([]); // Reset barcodes to render on new fetch
        items.forEach((meatPie, index) => {
            setTimeout(() => {
                setBarcodesToRender((prevBarcodes) => [...prevBarcodes, meatPie]);
            }, index * 500); // Delay increases by 0.5 seconds for each item
        });
    };

    const renderBarcode = (meatPie) => {
        return (
            <div className="barcode" key={meatPie.id}>
                <h3>{meatPie.item_data.name}</h3>
                <img
                    src={`https://barcode.orcascan.com/?type=code39&data=${meatPie.item_data.variations[0].item_variation_data.sku}`}
                    alt="Barcode"
                />
            </div>
        );
    };

    // Loading state
    if (loading) {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        );
    }

    // Main dashboard rendering
    return (
        <main>
            <section className="pt-5">
                <div className="barcode-container">
                    {barcodesToRender.map((meatPie) => renderBarcode(meatPie))}
                </div>
            </section>
        </main>
    );
}

export default Dashboard;
