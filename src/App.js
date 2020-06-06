import React, { Component } from 'react';
import User from "./assets/image/user.png";
import NoImage from "./assets/image/no-image.jpg";

class App extends Component {
	state = {
		isSelected:"journey"
	}
  render() {
    return (
		<div className="main_container" id="home">
			<div className="navbar">
				<div className="logo">
					<a href="">TravelSite.com</a>
				</div>
				<div className="navbar_items">
					<ul>
					<li><a href="">Sanjay Singh</a></li>
					<li><a href="">Feeds</a></li>
					<li><a href="">Messsges</a></li>
					<li><a href="">Notification</a></li>
					<li><a href="">Setting</a></li>
				</ul>
				</div>
			</div>

			<div className="banner_image">
				<div className="banner_content">
					<div className="user-detail">
						<div><img src={User} alt="user" /></div>
						<div>
							<h3>Mahek Jain <span>Follow</span></h3>
							<p>New Delhi, India</p>
							<p className="user-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
							<div className="feeds-container">
								<div className="feed">
									<p>Wishlist

									<span>(10)</span>
									</p>
								</div>
								<div className="feed">
									<p>Buddy List

									<span>(55)</span>
									</p>
								</div>
								<div className="feed">
									<p>Following

									<span>(20)</span>
									</p>
								</div>
								<div className="feed">
									<p>Followers

									<span>(125)</span>
									</p>
								</div>
							</div>
						
						</div>
					</div>

					<div>
						<h3>Rank: #45</h3>
					</div>
				</div>
			</div>

			<div className="about" id="about">
				<div className="about-content" id="about-content">
					<div>
						<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
					</div>

					<div>
						<div className="tabHeading">
							<label className={this.state.isSelected === "journey" && "active"} onClick={() => this.setState({ isSelected:"journey" })}>Journey</label>
							<label className={this.state.isSelected === "review" && "active"} onClick={() => this.setState({ isSelected:"review" })}>Reviews</label>
							<label className={this.state.isSelected === "photo" && "active"} onClick={() => this.setState({ isSelected:"photo" })}>Photos</label>
							<label className={this.state.isSelected === "trip" && "active"} onClick={() => this.setState({ isSelected:"trip" })}>Trips</label>
							<label className={this.state.isSelected === "stats" && "active"} onClick={() => this.setState({ isSelected:"stats" })}>Stats</label>
						</div>

						<div className="tabContent">
							{this.state.isSelected === "journey" && 
								<div className="tabContainer">
									<div className="tab-description">
										<div>
											<div className="tab-user-info">
												<img src={User} />
												<p>Mehak Jain
													<span>Reviewed <b>Recong Peo</b></span>
												</p>
											</div>
											<label>2 months ago</label>
										</div>
										<div>
											<div className="tab-user-image">
												<img src={NoImage} alt="no-image" />
												<img src={NoImage} alt="no-image" />
												<img src={NoImage} alt="no-image" />
												<img src={NoImage} alt="no-image" />
												<img src={NoImage} alt="no-image" />
											</div>
										</div>

										<div>
											<div className="tab-review">
											<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
											</p>
											</div>
										</div>

										<div>
											<p>120 people found there review helpful</p>
										</div>
									</div>
								
								
									<div className="tab-description">
										<div>
											<div className="tab-user-info">
												<img src={User} />
												<p>Mehak Jain
													<span>Commented on Recong Peo <b>review</b></span>
												</p>
											</div>
											<label>2 months ago</label>
										</div>
										<div>
											<div className="tab-user-image">
												<img src={NoImage} alt="no-image" />
												<img src={NoImage} alt="no-image" />
												<img src={NoImage} alt="no-image" />
												<img src={NoImage} alt="no-image" />
												<img src={NoImage} alt="no-image" />
											</div>
										</div>

										<div>
											<div className="tab-review">
											<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
											</p>
											</div>
										</div>

										<div>
											<p>12 likes</p>
										</div>
									</div>
								
								</div>
							}
							{this.state.isSelected === "review" && 
								<div className="tabContainer">
									Review Selected
								</div>
							}
							{this.state.isSelected === "photo" && 
								<div className="tabContainer">
									Photo Selected
								</div>
							}
							{this.state.isSelected === "trip" && 
								<div className="tabContainer">
									Trip Selected
								</div>
							}
							{this.state.isSelected === "stats" && 
								<div className="tabContainer">
									Stats Selected
								</div>
							}
						</div>
					</div>
				</div>

				<div className="about-side" id="about-side">
					<div className="about-sidenav1">
						<ul>
							<li><a href="">Journey</a></li>
							<li><a href="">Reviews</a></li>
							<li><a href="">Photos</a></li>
							<li><a href="">Trip</a></li>
							<li><a href="">Stats</a></li>
						</ul>
					</div>
					<div className="about-sidenav">
						<p>Popular reviews by Mahek Jain</p>
						<ul>
							<li>
								<img src={User} />
								<p>
									Mahek Jain reviewed Pre
									<span>2 month ago</span>
								</p>
							</li>
							<li>
								<img src={User} />
								<p>
									Mahek Jain reviewed Pre
									<span>2 month ago</span>
								</p>
							</li>
							<li>
								<img src={User} />
								<p>
									Mahek Jain reviewed Pre
									<span>2 month ago</span>
								</p>
							</li>
							<li>
								<img src={User} />
								<p>
									Mahek Jain reviewed Pre
									<span>2 month ago</span>
								</p>
							</li>
						</ul>
					</div>
					<div className="about-sidenav">
						<p>Popular reviews by Mahek Jain</p>
						<ul>
							<li>
								<img src={User} />
								<p>
									Mahek Jain reviewed Pre
									<span>2 month ago</span>
								</p>
							</li>
							<li>
								<img src={User} />
								<p>
									Mahek Jain reviewed Pre
									<span>2 month ago</span>
								</p>
							</li>
							<li>
								<img src={User} />
								<p>
									Mahek Jain reviewed Pre
									<span>2 month ago</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
			<div className="footer" id="footer">
				<p>Copyright 2015 travelsite.com. All rights reserved. |</p>
				<p><a href="">Disclaimer & Privacy Ploicy</a></p>
			</div>
		</div>
    );
  }
}

export default App;
