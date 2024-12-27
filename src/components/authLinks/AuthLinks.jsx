'use client'

import React, { useState } from 'react'
import styles from './authlinks.module.css'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
const AuthLinks = () => {
	const [open, setOpen] = useState(false)
	//temporary
	// const status = 'notauthenticated';
	const { status } = useSession();
	return (
		<>
			{
				status === 'unauthenticated' ? (
					<Link href={"/login"} className={styles.link}>Login</Link>
				) : (
					<>
						<Link href={'/write'} className={styles.link}>Write</Link>
						<span className={styles.link} onClick={signOut}>Logout</span>
					</>
				)
			}
			<div className={styles.burger} onClick={()=> setOpen(!open)}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
			{open && (
				<div className={styles.responsiveMenu}>
					<Link href={"/"}>Homepage</Link>
					<Link href={"/"}>About</Link>
					<Link href={"/"}>Contact</Link>
					{status === 'notauthenticated' ? 
					(
						<Link href={"/login"}>Login</Link>
					)
					:
					(
						<>
						<Link href={"/write"}>Write</Link>
						<button className={styles.link}>Logout</button>
						</>
					)}
				</div>
			)}
		</>
	)
}

export default AuthLinks