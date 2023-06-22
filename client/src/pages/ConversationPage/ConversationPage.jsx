import React from "react";
import { ConversationList } from "../../components/ConversationList/ConversationList";
import baseProfilePicture from "../../assets/images/pfp.png";

const sampleData = [
	{
		type: "directMessage",
		id: "123",
		members: [
			{
				_id: "123",
				username: "arch user32",
				handle: "4852",
				status: "offline",
				quote: "I use Arch, btw.",
			},
			{
				_id: "321",
				username: "Debian User",
				status: "away",
				quote: "I exist.",
				profilePicture: baseProfilePicture,
			},
		],
	},
	{
		type: "directMessage",
		id: "1234",
		members: [
			{
				_id: "321",
				username: "Ubuntu User",
				status: "online",
				quote: "Waiting 6 months for package update.",
				profilePicture: baseProfilePicture,
			},
			{
				_id: "123",
				username: "arch user32",
				handle: "4852",
				status: "offline",
				quote: "I use Arch, btw.",
			},
		],
	},
	{
		type: "directMessage",
		id: "321",
		members: [
			{
				_id: "123",
				username: "arch user32",
				handle: "4852",
				status: "offline",
				quote: "I use Arch, btw.",
			},
			{
				_id: "321",
				username: "Arch User",
				status: "doNotDisturb",
				quote: "I use Arch, btw.",
				profilePicture: baseProfilePicture,
			},
		],
	},

	{
		type: "directMessage",
		id: "4321",
		members: [
			{
				_id: "123",
				username: "arch user32",
				handle: "4852",
				status: "offline",
				quote: "I use Arch, btw.",
			},
			{
				_id: "321",
				username: "Deepin User",
				status: "offline",
				quote: "In the grave.",
				profilePicture: baseProfilePicture,
			},
		],
	},
	{
		type: "groupConversation",
		id: "541",
		name: "Linux hangout gang",
		imageSrc: baseProfilePicture,
		members: [
			{
				_id: "123",
				username: "arch user32",
				handle: "4852",
				status: "offline",
				quote: "I use Arch, btw.",
			},
			{
				_id: "321",
				username: "Deepin User",
				status: "offline",
				quote: "In the grave.",
				profilePicture: baseProfilePicture,
			},
		],
	},
];

const ConversationPage= () => {
	return (
		<div className="page IndexPage">
			<ConversationList conversations={sampleData} />
		</div>
	);
};

export { ConversationPage };
