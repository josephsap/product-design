function App() {
  return (
    <div>
    <main>

		<a href="mailto:shaz@thesupply.com?subject=From product.design website" class="button">Contact</a>

		
			<div class="content">
				<p>Before you lies an internet page that will house some cool  <a> Product Design</a> goodness. <br /><br />I mean, <a>it's  so hot</a> right now. <br /><br /><a>Stay tuned for  more info</a>.
        </p>
			</div>
		</main>
		<svg class="cursor" width="280" height="280" viewBox="0 0 280 280">
			<defs>
				<filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%" 
				filterUnits="objectBoundingBox">
					<feTurbulence type="fractalNoise" baseFrequency="0.02 0.15" numOctaves="3" result="warp" />
					<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp" />
				</filter>
			</defs>
			<circle class="cursor__inner" cx="140" cy="140" r="50"/>
		</svg>
    </div>
	



  );
}

export default App;
