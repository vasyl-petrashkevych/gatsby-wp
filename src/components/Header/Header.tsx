import React, {FC} from 'react';
import {useStaticQuery, graphql} from "gatsby"
import styled from 'styled-components'

type Props = {};
const HeaderDiv = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: #ffff;
  box-shadow: 0 0 15px #000;
`
const HeaderPlaceholder = styled.div`
  display: flex;
  justify-content: space-between;
  nav {
    a {
      color: #000;
      text-decoration: none;
     transition: ease-in-out .3s;
      
      &+a {
        margin-left: 15px;
      }
      &.active,
      &:hover {
        color: red;
      }
    }
  }
`
export const Header: FC<Props> = ({location}) => {
  const data = useStaticQuery(graphql`
      query {
          wpMenu(slug: {eq: "main-menu"}) {
              menuItems {
                  nodes {
                      id
                      title
                      uri
                      url
                      label
                  }
              }
          }
      }
  `)
    return <HeaderDiv>
        <div className="container">
            <div className="row">
                <HeaderPlaceholder className="col-md-12">
                    <div className="log">
                        logo place
                    </div>
                    <nav>
                        {
                            data.wpMenu.menuItems.nodes.map((item) => {
                                const url = item.url === '/home/' ? '/': item.url;
                                    return  <a
                                    className={location.pathname === url ? 'active' : ''}
                                    key={item.id} href={url}>{item.label}</a>
                            }
                            )
                        }
                    </nav>
                </HeaderPlaceholder>
            </div>
        </div>
    </HeaderDiv>
};