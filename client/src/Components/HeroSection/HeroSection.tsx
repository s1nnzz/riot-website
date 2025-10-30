function HeroSection() {
	return (
		<div className="hero-new__background-image">
			<picture className="hero-new__image">
				<source
					media="(min-width: 760px)"
					srcSet="https://www.riotgames.com/darkroom/2000/5bccfe853fd74c77bce2100588c82027:63d6d7b83f53690de6a3282523d24457/wrld25-homepage-herobanner-3840x1600-10-25.png"
				/>
				<img
					src="https://www.riotgames.com/darkroom/800/4b04e384da23bd5a77f75a6d83367902:782c85a938321975a6d5e9fc30ad0512/wrld25-homepage-herobanner-3840x1600-10-25.png"
					alt=""
				/>
			</picture>
		</div>
	);
}

export default HeroSection;
