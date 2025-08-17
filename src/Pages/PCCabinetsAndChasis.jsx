import React, { useState } from 'react';
import FilterSidebar from "../Components/Filter";
import './style-Processors.css';
import ProductCard from '../Components/ProductCard';
import productsData from '../data/PCCabinetAndChasisList';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BottomNav from '../Components/BottomNav';

function PCCabinetsAndChasis() {
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    const handleFilterChange = (filters) => {
        let filtered = productsData;

        filtered = filtered.filter(
            (p) => p.price >= filters.price[0] && p.price <= filters.price[1]
        );

        Object.keys(filters).forEach((field) => {
            if (field !== "price" && filters[field]?.length) {
                filtered = filtered.filter((p) => filters[field].includes(p[field]));
            }
        });

        setFilteredProducts(filtered);
    };

    return (
        <>
            <Header />
            <BottomNav/>
            <div className="heroOfProcessors">
                <div className="UpperSection">
                    <div className="HeadingSection">
                        <h1>PC Cabinets & Chasis</h1>
                    </div>
                </div>

                <div className="LowerSection">
                    <div className="FilterContainer">
                        <FilterSidebar
                            products={productsData}
                            filterFields={["brand"]}
                            onFilterChange={handleFilterChange}
                        />
                    </div>

                    <div className="ProductCardContainers">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PCCabinetsAndChasis;
