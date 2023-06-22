import React from "react";
import "../Conversation/Conversation.css";
import { Link } from "react-router-dom";

const GroupConversation = ({ conversation }) => {
	return (
		<Link className="Conversation" to={`/chat/${conversation.id}`}>
			<div className="Conversation__img__container">
				<img
					className="Conversation__img"
					src={conversation.imageSrc}
					alt="conversation-img"
				/>
			</div>
			<div className="Conversation__data__container">
				<h4 className="Conversation__data__name">
					{conversation.name}
				</h4>
				<p className="Conversation__data__memberCount">{conversation.members.length} {conversation.members.length > 1 ? "Members" : "Member"}</p>
			</div>
		</Link>
	);
};

export { GroupConversation };
