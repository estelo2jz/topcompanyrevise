import React, { Component } from 'react';
import "../styles/main.scss";

export default class Large extends Component {
  render() {
    return (
      <div className="items-container">
        <div className="items-inner">
          <div className="tab">
            <input type="radio" id="rd1" name="rd" />
            <label className="tab-label" for="rd1">
              <div className="company-name-container">
                <div className="tab-left-container">
                  <div className="tab-company-rank">
                    <p>1</p>
                  </div>
                  <div className="tab-company-image">
                    <p><img src="data:image/png;base64,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" alt="company pic"/></p>
                  </div>
                  <div className="tab-company-name">
                    <p>Goosehead Insurance</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div className="tab-company-location">
                    <p>Westlake, Texas</p>
                  </div>
                  <div className="tab-right-sector">
                    <p>General Insurance</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Goosehead Insurance is an independent personal lines insurance agency. Goosehead represents more than 80 insurance companies that underwrite personal lines and small commercial lines risks, and its operations include a network of seven corporate sales offices and more than 400 franchise locations.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg1.b561c0ec.png" alt="goosehead insurance" />
                  </div>
                  <div className="tab-ul-content">
                    <lu>
                      <li>Location</li>
                      <li>Yeat Founded</li>
                      <li>Sector</li>
                      <li># of U.S. Employees</li>
                      <li>Website</li>
                    </lu>
                    <lu>
                      <li>Westlake, Texas</li>
                      <li>2013</li>
                      <li>General Insurance</li>
                      <li>341</li>
                      <li>
                        <a href="https://www.gooseheadinsurance.com/" target="_blank">
                          Visit ME!
                        </a>
                      </li>
                    </lu>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd2" name="rd" />
            <label className="tab-label" for="rd2">
              <div className="company-name-container">
                <div className="tab-left-container">
                  <div className="tab-company-rank">
                    <p>2</p>
                  </div>
                  <div className="tab-company-image">
                    <p><img src="data:image/png;base64,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" alt="company pic" /></p>
                  </div>
                  <div className="tab-company-name">
                    <p>Berkshire Hathaway HomeServices Ambassador Real Estate</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div className="tab-company-location">
                    <p>Omaha, Neb.</p>
                  </div>
                  <div className="tab-company-sector">
                    <p>Agents and Brokers</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Berkhire Hathaway HomeServices Ambassador Real Estate offers real estate services that include relocation, fine homes, rentals, short sales, commercial and investment properties.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg2.82966953.png" alt="goosehead insurance" />
                  </div>
                  <div className="tab-ul-content">
                    <lu>
                      <li>Location</li>
                      <li>Yeat Founded</li>
                      <li>Sector</li>
                      <li># of U.S. Employees</li>
                      <li>Website</li>
                    </lu>
                    <lu>
                      <li>Omaha, Ned.</li>
                      <li>1984</li>
                      <li>Agents and Brokers</li>
                      <li>661</li>
                      <li>
                        <a href="https://www.bhhsamb.com/" target="_blank">
                          Visit ME!
                        </a>
                      </li>
                    </lu>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd3" name="rd" />
            <label className="tab-label" for="rd3">
              <div className="company-name-container">
                <div className="tab-left-container">
                  <div className="tab-company-rank">
                    <p>3</p>
                  </div>
                  <div className="tab-company-image">
                    <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAAAXNSR0IArs4c6QAAC4VJREFUeJztmWl4VNUZx9+z3Jlk1sxkJSEJY1jU0DRRGgVZpOAuUq3WKj5YsIpKUVCqItKKuPtoRVt3i0URsWIQbRAsFhEUqIAQSAh79n2bfe6957z9cEOIYWK1i9Lp/J/7Zc59z7nnd97l3HOHICL8P4l+3xP4rhUHjnXFgWNdceBYVxw41hUHjnXFgWNdceBYVxw41hUHjnXFgWNdceBYVxw41hUHjnWdrMBSghAg5dfZ/Ev/ipGT/c80RCCk33aUQL6dz04+DyMCgLp7U+CdxdrhPUBIdE8SgpHQt6WFqB5GRCElAWCM9W6UUgIApZREXfJjklJKREop7d8MEaVEAOw7oJRAqbp3q+/5u1DqxOpMmvs8S80GAKD0eGddDfz5GW3v5+axl1vOvw4Avzl5FDtCCGesN63RyBhjjH09rQHAGfsaWiklIYQx2jOgPJ6rCAB6dQXqKk3OhKBfNBwFSkGKns5AiFa5PfzJShkKhEpfE611QChg9wg9julP/KtTQUpJVW3D2r995nDYfnLh+ASzSSJSQrz+wKo1f9N0/dKJY9NT3YjYH/mW7WXVdQ1nFpyWNyj7RDNEpJT6/MGtO8rqm1pT3M6RIwpcTkf3bUIA0HzGhMjWD2VXK0lIDJQ8R+wuJa/AQDXymbkzqDsdw0GWkUOsRl9iDE4I+ScuwV7SdYGIH23ckpY/YeQlUzu6vIioC4GI1XUN+WOvzBlx8fbdFVJKVdWEED0dpZS6LjRdR8TpcxbaB5/z6purpERVVYUQUkrDzOiyZXvZxKtuHjpqcvaZFw0ZOXnClTPeXr1O14+ZSSkRtY6WcOXOyOE9HQ9Pa5lxdmhjybEnCRQ6IoY2vttyyyj1wJfdjd39UNW0zdu+jETUnof2UZSQNimK2+VMctp7LxWl1JVkdyc5OWOEEEXhlB7va4QoZwwAbFZLcpJTUTghoCiKkaJCSimRENLa3nnPg4tr6hsHpKdOGF2cnZlevv9Q6frNQnYvn0QkADwpxTy00OTJd8z5g2nUJN+Shf5lj6IWAUJRCgBgadmEcZaeY0SmEcbl+w9fNnXOg0+/oiicEBJ1++EnNhmuMBxjXARQIgohdV3nnLW2d27fVZ6Wmlw0fJgRRc2t7bvLDzgctuLCfJRS03VLYoIQYs++Q5QST06WzWrRdcE5+3z77vqmlhS366mFdxYNH1ZV27DkrdWzbvi5SVGM8kkpbe/sKis/oGmaJycrz5PjmHpvMPfU4PIn9Or99um/Zem5orlGLfsMGI/8/SPzj86jdpfUdc754aq63RX7RxcXhsIRxqjJZPpGwN1OA0hMMFFKKGUAkGA2GUtptSTs2F1xzS3zLhh/zvLnH5ZSMsa2l1VMu/3+4sL81UuflijNZvOOsorVaz/5Ylc5ZywjLfmayy/6xdWTELHL65eIJpNySm4WIWRQdubCX998bKGBUvLWqrUvLH2nqaVN03Wn3Ta6uPCeX/1iwLgr+MDBgZfv8y6erRSMVndtRF8nKKZgyXPhj1dYLrtJKb4AABSFJznstfXNF0+ZlZOV8cpTvzHWsXeoRgcmBISUB47U2K0WISWntLGl3SihUgLn3G6zWhLMPfYK5zarxWpJMAIkwWwqXb/Z6/WnpbgJJUdq6h946sWOTu+cGVOGeHI4Y16f/8a5i35y4fhRIwo8OVkAIKRklJaUfrzg8ec452kp7tRkV019U8maDYer65Y89duUvAI2/0++Z+eEN75LFDN1pVGHW7Q3Sm+7f+lDFiUhsWickd6IGImoqqpBtJiOHtKUMZ8/OH32/T3eRoBjBbC7ssheG3h3i+zVInHaNZOvu+JixuifP/jrn95+f8mK984/9+ziovyrJp33ZsmaXXsqd5cfcDkd5409666Z19usFq8v8MLSlYzSc0eeee/t0zNSUw4erXngyZc2bfvy5TdL5s2aJnUNtQjhJmX4KNuVs4gjWTRV+Zc9LqoqgqWvJRaNIUyJRNTMjNSXn1zAOVcUDgB9ivbX7deEQDfjNyj1x0ckNBgKFxcNv2/2LwflZGZnZdwx47qJY85q7/Ru2PwFIeT+uTMWL/r1uFEjXA57IBB8Y2XpgseeI4TsrTxU29CU4nb95o6bsjMzKCWnDfHMvXWqzZa4eetOFSge3Ckaq4jdbfvZbOpKJ0B4Zp518s2gmGRLLbTXE5MZUFJKXE6H3WqJ+k4axcOEECmE3Wb53QNz7TarEIIx1tTSdvuCJ3rnAyWkp672qdiqqo0oPF1IKXQBAJTR4qLhy0s+bOvoQkRC6SUTx1wyccy+g0effmnZlh1ln3y+o7W9MxgKB4Kh04Z40lLdui4AQNf1QQMHJNntXl8gJNAaDqIQzOGmDjcIHQBA6DR1IE2wCm8nBLzG2xgi6rrOGIsKHN3DiMAoHezJzh044JTcgbkDB3hyswgcQ6WUUhoKRwghnHNKSCSi9WC7kuyM0fL9hxmlJpNiMimcsb2VhwglriQHIcTnD4QjEQA4dfCge2ZNAwBdiKaWdkapSVGqahsq9h/hnHHOOOfbdu5t7ehMdidZOcGkNKKYRGudfrQCGDcurWKbDHhJogXc6SAEAGGMcd5vMe43pBEgFFalRE0XUmI4ohpeVVVtiCfb6bDvO3jkrVVrwxH1aE398pI1gDjYkw0A5/yoMDEhYdOWnS+9vrLT6/P5A2+sLP3go09dTseEMcWdXb5f3fvY3YueqW9s6ejyvbVqLSJSSlLcTl0KSokQYv4jz2747Isj1XXvfbjhyRde1zR93KgzOUoyuEjx5KMa9i17LLJzg157MPzpquBfXkVd4558sCbLSIgrSmt7Z11jM+nn1BEtpAEoJT0XAqGUUEIoJYyzUDg8NC/38ovGv7Zi9cPP/HHZu2u6fP76xuYB6SnXXz0JEX88uviC8SPfX7dx8SvL3/lgPaXkSHW9pmuzb5xy+tBT3l697uNPt9pt1p179pnNpqbmNq8/cNn549JTk7ft3AsAJpNSvv/IzHmPOmzWLp8/GAoXF+ZPu/YKIJSiDlKiGpFN1f4lC4k5EcNBFDpzpdkuvxUQh3iyExPNjc1tN925KD01+a6Z1586xCOl7J1xUYB1IQLBUCAY7l2KpJSBYDgQDAuJADDvtulmk/Le2k8OHKriCi84feh9t98weFC2lJJz9uj825wO27oNW2rqGyklnpzMqVddeu0VFwkhfnrJBFXTX1uxurG5TUjpsFkvnjB63m3TAYBQElE1T07WpPPHvr/u01AkkpriGlNcdMfMac5ERW84Elj6kGiusU25W/1yg161D3WVWB2KJ986eQbLGCSlyPPk3HXr9b//44rKw1UtbZ0Z6SlwQpX+yvHQqEltHZ1lFQcTE8xnFJymcG40hsKRHWX7hBA/zB/qtNsM+5r6pqraeqvF8oNTB3PODMuewlZd11hV22C1JA7Ly7VaEnsXPK8vUHmoStO07MyM7Kx04zRfun7TLXc/Mm7kGUufXdTQ3Nre0ZWW7EpNcUNHY8eL87G1Hji33/iQklcAgKKxSga81JnCUjKNqcOxRze3tlceqnInOfKH5UXL1X9JUsrehwc8djDo767e6+eJHTVNQ8TS9ZtOOevSKTPni68aBzesbLlhRMvMMd5XFiAiamqfqaDsd/ATFf3FQ0oEAqxX6COCRAkIlJIeGQcSY7vuszP1udt7KEopIhrvLQSI8RMAVE3r7PIHgyFKqUREiZQgJdQ0fFRk2BmyvdE8YiKgBMoAEBABAQgAoQCk7+ASCYHeU4oe0t+XEJEQ0tjStmtPZbIraUTh6X0NdBXUMLE4onb/VjopgP+Jer7j9fdB79uo3w36u5eR/H2yAwCOf8f7t2nhf8PD/1GdfJ9p/8uKA8e64sCxrjhwrCsOHOuKA8e64sCxrjhwrCsOHOuKA8e64sCxrjhwrCsOHOuKA8e6/gFpZuGqg3RkkgAAAABJRU5ErkJggg==" alt="company pic" /></p>
                  </div>
                  <div className="tab-company-name">
                    <p>HubSpot</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div className="tab-company-location">
                    <p>Cambridge, Mass.</p>
                  </div>
                  <div className="tab-company-sector">
                    <p>B2B Software</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>HubSpot is an inbound marketing, sales and CRM growth stack. HubSpot Marketing includes social media publishing and monitoring, blogging, SEO, website content management, email marketing, marketing automation and reporting and analytics. HubSpot Sales enables sales and service teams to have more effective conversations with leads, prospects and customers. HubSpot CRM helps sales teams organize, track and grow their pipeline.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg3.72a57e83.png" alt="goosehead insurance" />
                  </div>
                  <div className="tab-ul-content">
                    <lu>
                      <li>Location</li>
                      <li>Yeat Founded</li>
                      <li>Sector</li>
                      <li># of U.S. Employees</li>
                      <li>Website</li>
                    </lu>
                    <lu>
                      <li>Omaha, Ned.</li>
                      <li>2006</li>
                      <li>B2B Software</li>
                      <li>1633</li>
                      <li>
                        <a href="https://www.hubspot.com/" target="_blank">
                          Visit ME!
                        </a>
                      </li>
                    </lu>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd4" name="rd" />
            <label className="tab-label" for="rd4">
              <div className="company-name-container">
                <div className="tab-left-container">
                  <div className="tab-company-rank">
                    <p>4</p>
                  </div>
                  <div className="tab-company-image">
                    <p><img src="data:image/png;base64,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" alt="company pic" /></p>
                  </div>
                  <div className="tab-company-name">
                    <p>Power Home Remodeling Group</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div className="tab-company-location">
                    <p>Chester, Pa.</p>
                  </div>
                  <div className="tab-company-sector">
                    <p>Home Improvement and Remodeling</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Goosehead Insurance is an independent personal lines insurance agency. Goosehead represents more than 80 insurance companies that underwrite personal lines and small commercial lines risks, and its operations include a network of seven corporate sales offices and more than 400 franchise locations.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg4.7fa031c9.png" alt="goosehead insurance" />
                  </div>
                  <div className="tab-ul-content">
                    <lu>
                      <li>Location</li>
                      <li>Yeat Founded</li>
                      <li>Sector</li>
                      <li># of U.S. Employees</li>
                      <li>Website</li>
                    </lu>
                    <lu>
                      <li>Chester, Pa.</li>
                      <li>1992</li>
                      <li>Home Improvement and Remodeling</li>
                      <li>2284</li>
                      <li>
                        <a href="http://www.powerhrg.com" target="_blank">
                          Visit ME!
                        </a>
                      </li>
                    </lu>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

