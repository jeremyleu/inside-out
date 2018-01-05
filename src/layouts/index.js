import React from "react"

export default ({ children }) =>
  <div>
    <div style={{ margin: '0 auto', width: '100%', height: '400px', backgroundColor: '#2C365E', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
      <h1>
        Hello
      </h1>
    </div>
    <div>
      {children()}
    </div>
    <div style={{ margin: '0 auto', width: '100%', minHeight: '250px', backgroundColor: '#eee' }}>
      <div className="sections" style={{ padding: '3rem 7rem' }}>
        <div style={{ width: '160px', display: 'inline-block', fontWeight: 600 }}>
          Questions?
          <br />
          <br />
        </div>
        <div style={{ display: 'inline-block' }}>
          Reach out at <strong>ksleu@insideoutws.com</strong>.
          <br />
          <br />
        </div>
        <div style={{ textTransform: 'uppercase', fontWeight: 600, color: '#bbb' }}>
          Last Updated: November 28, 2017
        </div>
      </div>
    </div>
  </div>
