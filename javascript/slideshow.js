function Slider() {
				var numImages = $(".slider img").size();
				var start = 1 + Math.round((numImages - 1)*Math.random());
				$(".slider #" + start).show("fade", 500);
				$(".slider #" + start).delay(5500).hide("fade", 500);

				var count = 2;

				setInterval(function () {
					$(".slider #" + count).show("fade", 500);
					$(".slider #" + count).delay(5500).hide("fade", 500);
					if (count == numImages) {
						count = 1;
					}
					else {
						count++;
					}
				}, 6500);
			}