import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { dataDigitalBestSeller } from './data';
import "./table.css";
import imgGirl from '../../assets/img/unnamed.png';
import Carousel from 'react-bootstrap/Carousel';

function sliceIntoChunk(arr, chunkSize){
	const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
		// if (chunk.length < chunkSize){
		// 	while(chunk.length < chunkSize){
		// 		chunk.push(null);
		// 	}
		// }
		console.log(chunk);
        res.push(chunk);
    }
    return res;
}

function ListvoteTable(){
	//Phân list thành từng nhóm nhỏ để bỏ vào từng slider
	const groupTableRow = sliceIntoChunk(dataDigitalBestSeller, 3); 
    const [defaultImage, setDefaultImage] = useState({});
	const [item,setItem] = useState();

  	const handleErrorImage = (data) => {
		setDefaultImage((prev) => ({
		...prev,
		[data.target.alt]: data.target.alt,
		linkDefault: imgGirl,
		}));
  	};

	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		  setIndex(selectedIndex);
	  };
    return (
        <div className="listvote-table">
			<Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={null} >
				{groupTableRow.map((item) => (
					<Carousel.Item>
						<Table  className={`small-table-${groupTableRow.indexOf(item)}`} 
						striped bordered hover size="sm"
						style={{width:'70%', margin:'auto'}}>
							<thead>
								<tr>
								<th>ID</th>
								<th>トピック</th>
								<th>デザイン</th>
								<th>投票数</th>
								</tr>
							</thead>
							<tbody>
								{item.map((element) => (
									<tr>
										<td>{element.id}</td>
										<td>{element.topic}</td>
										<td >
											<img src={
												defaultImage[element.topic] === element.topic
													? defaultImage.linkDefault
													: element.linkImg
												}
												alt={element.topic} 
												onError={handleErrorImage}
											/>
										</td>
										<td>{element.numOfVote}</td>
									</tr>
								))}
							</tbody>
							
						</Table>
					</Carousel.Item>
				))}
            </Carousel>
            {/* <Table striped bordered hover  size="sm">
				<thead>
					<tr>
					<th>ID</th>
					<th>Topic</th>
					<th>Design</th>
					<th>Voting number</th>
					</tr>
				</thead>
				<tbody>
					{dataDigitalBestSeller.map((item) => (
						<tr>
							<td>{item.id}</td>
							<td>{item.topic}</td>
							<td >
								<img src={
									defaultImage[item.topic] === item.topic
										? defaultImage.linkDefault
										: item.linkImg
									}
									alt={item.topic} 
									onError={handleErrorImage}
								/>
							</td>
							<td>{item.numOfVote}</td>
						</tr>
		  			))}
				</tbody>
			</Table> */}
        </div>
    );
}

export default ListvoteTable;