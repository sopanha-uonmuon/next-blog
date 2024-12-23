import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey, Lama dev Here!</b> Discover my stories and creative ideas.
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src={'/p1.jpeg'} alt='' fill className={styles.image}/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque veritatis nulla maxime officia nam repellendus quibusdam modi cupiditate saepe tenetur, laborum exercitationem aut incidunt recusandae libero id, deserunt neque!</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis, veritatis, ab suscipit consectetur saepe dolorem repudiandae quisquam cum minima culpa aliquam! Magnam impedit, nihil ut perspiciatis maiores qui amet.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	)
}

export default Featured