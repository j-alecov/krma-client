import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../html/css/animate.css'
import './../html/css/bootstrap.min.css'
import './../html/css/flatpickr.min.css'
import './../html/css/font-awesome.min.css'
//import './../html/css/jquery.mCustomScrollbar.min.css'
import './../html/css/jquery.range.css'
import './../html/css/line-awesome-font-awesome.css'
import './../html/css/line-awesome-font-awesome.min.css'
import './../html/css/line-awesome.css'
import './../html/css/line-awesome.min.css'
import './../html/css/mystyle.css'
import './../html/css/responsive.css'
import './../html/css/style.css'
import mainimg from "./../html/images/cm-main-img.png";

class LandingPage extends Component {
    state = {  }
    render() { 
        return (
<body className="sign-in">
	<div className="wrapper">


		<div className="sign-in-page">
			<div className="signin-popup">
				<div className="signin-pop">
					<div className="row">
						<div className="col-lg-6">
							<div className="cmp-info">
								<div className="cm-logo">
									<img src="images/cm-logo.png" alt=""/>
									<p>Krma, es una red social donde podrás ayudar a otras personas,
										obtener puntos por ello y usarlos para pedir ayuda!</p>
								</div>
								<img src={mainimg} alt=""/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="login-sec">
								<ul className="sign-control">
									<li data-tab="tab-1" className="current"><a href="#" title="">Sign in</a></li>
									<li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
								</ul>
								<div className="sign_in_sec current" id="tab-1">

									<h3>Sign in</h3>
									<form method="post">
										<div className="row">
											<div className="col-lg-12 no-pdd">
												<div className="sn-field">
													<input type="text" name="username" placeholder="Username"/>
													<i className="la la-user"></i>
												</div>
											</div>
											<div className="col-lg-12 no-pdd">
												<div className="sn-field">
													<input type="password" name="password" placeholder="Password"/>
													<i className="la la-lock"></i>
												</div>
											</div>
												<div className="checky-sec">
													<div className="fgt-sec">
														<input type="checkbox" name="cc" id="c1"/>
														<label htmlFor="c1">
															<span></span>
														</label>
														<small>Remember me</small>
													</div>
													<a href="#" title="">Forgot Password?</a>
												</div>
											<div className="col-lg-12 no-pdd">
                                            <ul>
					                            <li><Link className="post-jb active" to="/home">Sign In</Link></li>
			                            	</ul>
											</div>
										</div>
									</form>
								</div>

								<div className="sign_in_sec" id="tab-2">
									<h3>Sign Up</h3>
									<div className="dff-tab current" id="tab-3">
										<form>
											<div className="row">
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="text" name="name" placeholder="Name"/>
														<i className="la la-user"></i>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="text" name="last-name" placeholder="Last Name"/>
														<i className="la la-user"></i>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="text" name="username" placeholder="Username"/>
														<i className="la la-user"></i>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="text" name="email" placeholder="Email"/>
														<i className="la la-chain"></i>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="password" name="password" placeholder="Password"/>
														<i className="la la-lock"></i>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="password" name="repeat-password" placeholder="Repeat Password"/>
														<i className="la la-lock"></i>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<div className="checky-sec st2">
														<div className="fgt-sec">
															<input type="checkbox" name="cc" id="c2"/>
															<label htmlFor="c2">
																<span></span>
															</label>
															<small>Yes, I understand and agree to the Krma Terms &amp; Conditions.</small>
														</div>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<button type="submit" value="submit">Get Started</button>
												</div>
											</div>
										</form>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footy-sec">
				<div className="container">
					<p><img src="images/copy-icon.png" alt=""/>Copyright 2019</p>
				</div>
			</div>
		</div>
	</div>
    </body>
        );
    }
}
 
export default LandingPage;