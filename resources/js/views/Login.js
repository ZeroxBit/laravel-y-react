import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import "../css/form.css"

const Login = (props) => {
    return (
        <Layout>
            <div className="col col-md-4 container-form">
                <div className="justify-content-md-center float-container-icon">
                    <div className="icon-circle">
                        <svg className="bi bi-person-fill icon-login" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="user" className="color-white">User name</label>
                        <input type="email" className="form-control" id="user" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="color-white">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-4">
                        <span>Login</span>
                    </button>
                    <div className="center-flex mt-3 color-white">
                        <Link to="/registre">Registrate aqui</Link>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Login)
