import React from 'react'
// style
import './style.css'
const DefaultFooter = () => {
  return (
      <div className="default-footer-2" data-aut-id="bottom-footer">
          <div className="d-2-copyrights">
              <section className="d-2-cp">
                  All rights reserved © 2006-2023 OLX
              </section>
              <section className="d-2-country">
                  <div className="d-2-country-names">Other Countries</div>{" "}
                  <a
                      href="https://www.olx.com.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="QUhEK"
                      data-aut-id=""
                  >
                      Pakistan
                  </a>{" "}
                  -{" "}
                  <a
                      href="https://www.olx.co.za"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="QUhEK"
                      data-aut-id=""
                  >
                      South Africa
                  </a>{" "}
                  -{" "}
                  <a
                      href="https://www.olx.co.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="QUhEK"
                      data-aut-id=""
                  >
                      Indonesia
                  </a>
              </section>
          </div>
      </div>
  )
}

export default DefaultFooter
