import React from 'react';

class Card extends React.Component {
	render() {
    // 'this' is an instance of the Card component
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} alt="profile pic"/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

export default Card;
