function Slider() {
				var numImages = $(".slider img").size();
				var start = 1 + Math.round((numImages - 1)*Math.random());
				$(".slider #" + start).show("fade", 250);
				$(".slider #" + start).delay(2500).hide("fade", 250);

				var count = 2;

				setInterval(function () {
					$(".slider #" + count).show("fade", 250);
					$(".slider #" + count).delay(2500).hide("fade", 250);
					if (count == numImages) {
						count = 1;
					}
					else {
						count++;
					}
				}, 3000);
			}