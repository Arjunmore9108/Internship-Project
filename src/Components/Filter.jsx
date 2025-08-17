import React, { useState, useEffect } from "react";
import "./Filter.css";

const FilterSidebar = ({ products, filterFields, onFilterChange }) => {
  const [filters, setFilters] = useState({});
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    if (products.length) {
      const prices = products.map((p) => p.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPriceRange([min, max]);
      setMaxPrice(max);
    }
  }, [products]);

  const handleCheckboxChange = (field, value) => {
    setFilters((prev) => {
      const currentValues = prev[field] || [];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      const newFilters = { ...prev, [field]: updatedValues };
      onFilterChange({ ...newFilters, price: priceRange });
      return newFilters;
    });
  };

  const handlePriceChange = (index, newValue) => {
    const updatedRange = [...priceRange];
    updatedRange[index] = Number(newValue);
    setPriceRange(updatedRange);
    onFilterChange({ ...filters, price: updatedRange });
  };

  const getUniqueValues = (field) => {
    return [...new Set(products.map((p) => p[field]))].filter(Boolean);
  };

  return (
    <div className="filter-sidebar">
      
      <div className="filter-section">
        <h4 className="section-title">Price</h4>
        <div className="price-slider">
          ₹
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, e.target.value)}
          />
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, e.target.value)}
          />
        </div>
      </div>

    
      {filterFields.map((field) => (
        <div className="filter-section" key={field}>
          <h4 className="section-title">{field}</h4>
          {getUniqueValues(field).map((value, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                checked={filters[field]?.includes(value) || false}
                onChange={() => handleCheckboxChange(field, value)}
              />{" "}
              {value}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
