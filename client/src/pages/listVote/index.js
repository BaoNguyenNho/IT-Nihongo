
import Badge from "react-bootstrap/Badge";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import ListvoteTable from "./table";
import './listvote.css';

function List() {

	let navigate = useNavigate()
	const { user, logoutUser } = useAppContext();
	const [isActivated, setIsActivated] = useState(false);

	useEffect(() => {
		if (user) {
			setIsActivated(true);
		}
		else {
			setIsActivated(false);
		}
	}, [user])
  	return (
		<div className="listvote">
			<img
				className="demo-bg"
				src="http://nuithantai.vn/Content/UserFiles/Images/News/l-071553-dinh-ban-co.png"
				alt=""
			></img>
			<div className="header">
				<Badge className="logo" bg="dark">竜</Badge>
				<div className="user">
					{/* <button className="logout_btn" onClick={logoutUser}>
						こちら
					</button> */}
					{isActivated ? (
						<div className="user_is-activated">
							{" "}
							<div className="user_info">
								<div className="user_ava">
									<img
										src="https://toppng.com/uploads/preview/anime-animegirl-animeboy-animeboi-cute-chibi-girl-boy-anime-cute-chibi-girl-11563035878bkeooj5e9u.png"
										alt="user-ava"
									/>
								</div>
								<span className="user_name">
									Phung Dinh Duong
								</span>
							</div>{" "}
							<div className="user_logout">
								<button onClick={logoutUser}>Logout</button>
							</div>
						</div>
					) : (
						<div className="user_login-link" style={{fontWeight: 'bold', fontSize:'30px'}}>
						管理者
							{/* ログインは
							<Link to="/login">
								<b> こちら</b>
							</Link> */}
						</div>
					)}
				</div>
			</div>
			<Card style={{ width: '70%', margin:'auto', border:'none' }}>
				<Card.Body>
					<Card.Title style={{textAlign:'center', fontWeight:'bold', fontSize:'30px'}}>投票リスト</Card.Title>
					<ListvoteTable></ListvoteTable>
				</Card.Body>
			</Card>
		</div>
    
  );
}

export default List;


