import React from "react";
import { Conversation } from "../Conversation/Conversation";
import "./ConversationList.css";

const authUser = {
	username: "Arch user",
	_id: '123',
	handle: "3165",
	status: "online",
	quote: "I use Arch, btw.",
};

const ConversationList = ({ conversations }) => {
	return (
		<div className="ConversationList">
			{conversations.map((conv, i) => {
				const otherMember = conv.members.find(
					(member) => member._id !== authUser._id
				);
				return (
					<Conversation
						key={i}
						otherMember={otherMember}
					/>
				);
			})}
		</div>
	);
};

export { ConversationList };
