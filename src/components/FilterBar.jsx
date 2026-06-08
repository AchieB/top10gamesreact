function FilterBar({ activeFilter, onFilter }) {

  
  const filters = [
    { value: 'all',     label: 'Alle'    },
    { value: 'pc',      label: 'PC'      },
    { value: 'console', label: 'Console' },
    { value: 'mobiel',  label: 'Mobiel'  },
  ]

  return (
    <section className="filter-bar">
      <div className="container">

        <span className="filter-label">Filter:</span>

        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
            onClick={() => onFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default FilterBar
