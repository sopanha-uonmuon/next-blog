import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from '@/components/comments/Comments'
const SinglePage = () => {
  return (
	<div className={styles.container}>
		<div className={styles.infoContainer}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
				<div className={styles.user}>
					<div className={styles.userImageContainer}>
						<Image src={'/p1.jpeg'} alt='' fill className={styles.avatar}/>
					</div>
					<div className={styles.userTextContainer}>
						<span className={styles.username}>John Doe</span>
						<span className={styles.date}>01.01.2024</span>
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image src={'/p1.jpeg'} alt='' fill className={styles.image}/>
			</div>
		</div>
		<div className={styles.content}>
			<div className={styles.post}>
				<div className={styles.description}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus ipsa deserunt in aperiam, nesciunt saepe natus vero amet fuga enim dolor laudantium totam incidunt perspiciatis magni nobis ut voluptas.
					</p>
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus ipsa deserunt in aperiam, nesciunt saepe natus vero amet fuga enim dolor laudantium totam incidunt perspiciatis magni nobis ut voluptas.
					</p>
				</div>
				<div className={styles.comment}>
					<Comments/>
				</div>
			</div>
			<Menu/>
		</div>
	</div>
  )
}

export default SinglePage