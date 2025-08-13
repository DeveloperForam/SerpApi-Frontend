// // frontend/src/Search.js
// import React, { useState } from 'react';

// export default function Search() {
//   const [q, setQ] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!q) return;
//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:5000/search?q=${encodeURIComponent(q)}`);
//       const data = await res.json();
//       // SerpApi returns "organic_results" for organic search results
//       setResults(data.organic_results || []);
//     } catch (err) {
//       console.error(err);
//       alert('Error fetching results');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <input
//         value={q}
//         onChange={(e) => setQ(e.target.value)}
//         placeholder="Search term..."
//         style={{ width: 300, padding: 8, marginRight: 8 }}
//       />
//       <button onClick={handleSearch} disabled={loading}>
//         {loading ? 'Searching...' : 'Search'}
//       </button>

//       <ul style={{ marginTop: 16 }}>
//         {results.map((r, i) => (
//           <li key={i}>
//             <a href={r.link} target="_blank" rel="noreferrer">{r.title || r.snippet || r.link}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import "./Search.css";

// export default function Search() {
//   const [q, setQ] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!q) return;
//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:5000/search?q=${encodeURIComponent(q)}`);
//       const data = await res.json();
//       setResults(data.organic_results || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="search-container">
//       <div className="search-box">
//         <input
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//           placeholder="Search something..."
//         />
//         <button onClick={handleSearch}>{loading ? "Searching..." : "Search"}</button>
//       </div>

//       <div className="results-grid">
//         {results.map((r, i) => (
//           <div className="result-card" key={i}>
//             {r.thumbnail && (
//               <img src={r.thumbnail} alt={r.title} className="result-image" />
//             )}
//             <h3>
//               <a href={r.link} target="_blank" rel="noreferrer">
//                 {r.title}
//               </a>
//             </h3>
//             <p>{r.snippet}</p>
//             {r.rich_snippet?.top?.extensions?.some(ext => ext.includes("video")) && (
//               <video width="100%" controls>
//                 <source src={r.link} type="video/mp4" />
//               </video>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import "./Search.css";

// export default function Search() {
//   const [query, setQuery] = useState("");
//   const [location, setLocation] = useState("");
//   const [results, setResults] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!query) return;
//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:5000/search?q=${encodeURIComponent(query)}`);
//       const data = await res.json();
//       setResults(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="search-page">
//       {/* Header */}
//       <div className="header">
//         <h1>Google Search API</h1>
//         <p>Scrape Google and other search engines from our fast, easy, and complete API.</p>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search Query"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           <button onClick={handleSearch}>{loading ? "Searching..." : "TEST SEARCH"}</button>
//         </div>
//       </div>

//       {/* Content */}
//       {results && (
//         <div className="results-section">
//           <div className="preview">
//             {results.organic_results?.slice(0, 5).map((item, i) => (
//               <div key={i} className="result-item">
//                 <h3><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3>
//                 <p>{item.snippet}</p>
//               </div>
//             ))}
//           </div>
//           <div className="json-output">
//             <pre>{JSON.stringify(results, null, 2)}</pre>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      // Only store organic_results
      setResults(data.organic_results || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      {/* Header */}
      <div className="header">
        <h1>Plan...Explore...Enjoy...</h1>
        <p>Plan Your Perfect Trip with Us Anytime & Anywhere.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Destination"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            {loading ? "Searching..." : "SEARCH"}
          </button>
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="results-list">
          {results.map((item, i) => (
            <div className="result-item" key={i}>
              <h3>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </h3>
              <p>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
