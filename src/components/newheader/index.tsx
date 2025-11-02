import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DropDown from "./DropDown"
import NavSide from "./NavSide"
import data from "../../data/header"
import './header.scss';

export default function NewHeader({ variant }:any) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const menudata = data.nav_categories;
  const menusubdata = data.nav_subcategories;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase cs-site_header_full_width cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <div className="cs-main_header">
          <div className="container">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="/logo192.png" alt="Logo" />
                </Link>
              </div>
              <div className="cs-main_header_center">
                <div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                  {menudata.map((item: string) => {
                    const subcatByAgeReduce = menusubdata.reduce((acc:any, subcat) => {
                      const cat = subcat.Category;
                      if (!acc[cat]) acc[cat] = [];
                      acc[cat].push(subcat);
                      return acc;
                    }, {});

                    const liclass = (subcatByAgeReduce[item] !== undefined && subcatByAgeReduce[item] !== null) ? "menu-item-has-children" : ""
                    return(
                    <li className={liclass}>
                    <NavLink key={window.crypto.randomUUID()}
                      to={`/${item}`} onClick={()=>setMobileToggle(false)}>
                      {item}
                      </NavLink>
                      { liclass != "" ?
                      <><DropDown>
                        <ul>

                          { 
                            subcatByAgeReduce[item] ?
                            subcatByAgeReduce[item].map((obj: any)=>
                              {
                                const b = obj.name;
                                return (<>
                                <li>
                                  <Link to={obj.url} onClick={() => setMobileToggle(false)}>
                                  {b}
                                  </Link>
                                </li>
                                </>)
                              })
                            :
                            ("")
                          }

                        </ul>
                        </DropDown>
                      </>
                      :
                      <></>

                      }
                    </li>
                    
                  )}
                  )}

                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="cs-main_header_right">
                <div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <NavSide />
      </div>
    </>
  );
}
