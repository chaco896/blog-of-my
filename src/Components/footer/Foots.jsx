import React from 'react'


function foots() {
  return (
    <>
        <footer className=" d-flex justify-content-around bg-success text-white">
            <div>
                <h2>Service </h2>
                <ul>
                    <li>Carbon Footprint</li>
                    <li>Life Cycle Analysis</li>
                    <li>Sustainable Procurement</li>
                    <li>Contribution</li>
                    <li>Net Zero Contributor</li>
                </ul>
            </div>
            <div>
                <h2>Resource</h2>
                <ul>
                    <li>Glossary</li>
                    <li>Greenly Blog</li>
                    <li>Whitepapers</li>
                    <li>Guides</li>
                    <li>Legislation Checker</li>
                </ul>
            </div>
        </footer>
        <div className="text-center bg-success bg-opacity-75 text-white">
            <p>Copyright © 2024 domainname.com. All Rights Reserved.Designed by : Chandra Gupt Maurya</p>
        </div>
    </>
  )
}

export default foots