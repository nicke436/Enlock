import React from "react";
import "./Conversation.css";
 
const Conversation = ({ otherMember }) => {
	return (
		<div className="Conversation">
			<div className="Conversation__img__container">
				<img
					className="Conversation__img"
					src={otherMember.profilePicture}
					alt="conversation-img"
				/>
				<div
					className={`Conversation__status Conversation__status__${otherMember.status}`}
				></div>
			</div>
			<div className="Conversation__data__container">
				<h4 className="Conversation__data__name">{otherMember.username}</h4>
		{ otherMember.status !== 'offline' && <p className="Conversation__data__quote">{otherMember.quote}</p> }
			</div>
		</div>
	);
};

export { Conversation };
