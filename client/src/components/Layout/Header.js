import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { AppstoreOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';



const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              🌱 GreenMart
            </Link>

            <ul className="navbar-nav ms-auto gap-3 mb-2 mb-lg-0">
              <SearchInput />

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      <UserOutlined style={{ marginRight: '8px' }} />
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      <UserOutlined style={{ marginRight: '8px' }} />
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  <AppstoreOutlined style={{ fontSize: '22px', marginRight: '8px' }} />
                  Categories
                </Link>

                <ul className="dropdown-menu">
                  <li>

                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>

              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link d-flex align-items-center">
                  <ShoppingCartOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                    <span>Cart</span>
                  </Badge>
                </NavLink>
              </li>



            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;





