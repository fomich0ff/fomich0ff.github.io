$(document).ready(() => {
	$.getJSON("/feeds/posts/default?alt=json", function (data) {

		var years = [];
		var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
		$.each(data.feed.entry, (index, value) => {

			var published = new Date(value.published.$t);

			/* get year */
			var year = published.getFullYear().toString();

			var filtered = $(years).filter((index, value) => {
				return value.year == year;
			});

			var foundYear = filtered.length > 0 ? filtered[0] : null;

			if (!foundYear) {
				years.push({
					"year": year,
					"months": []
				});
				foundYear = years[years.length - 1];
			}

			var yearIndex = years.indexOf(foundYear);

			/* get month */
			var month = monthNames[published.getMonth()];

			filtered = $(years[yearIndex].months, (index, item) => {
				return item.month == month;
			});

			var foundMonth = filtered.length > 0 ? filtered[0] : null;

			if (!foundMonth) {
				years[yearIndex].months.push({
					'month': month,
					'days': []
				});

				foundMonth = years[yearIndex].months[years[yearIndex].months.length - 1];
			}

			var monthIndex = years[yearIndex].months.indexOf(foundMonth);

			/*get day*/
			var day = published.getDay();
			filtered = $(years[yearIndex].months[monthIndex].days).filter((index, item) => {
				return item.day == day;
			})

			var foundDay = filtered.length > 0 ? filtered[0] : null;

			if (!foundDay) {
				years[yearIndex].months[monthIndex].days.push({
					"day": day,
					"posts": []
				});
				foundDay = years[yearIndex].months[monthIndex].days[years[yearIndex].months[monthIndex].days.length - 1];
			}


			var dayIndex = years[yearIndex].months[monthIndex].days.indexOf(foundDay);

			years[yearIndex].months[monthIndex].days[dayIndex].posts.push({
				"title": value.title.$t,
				"link": value.link.filter((item) => {
					return item.rel == 'alternate';
				})[0].href
			});

		});


		var ViewModel = function (data) {
			var model = this;

			this.years = ko.observable(data.posts);
			this.labels = ko.observable(data.labels);

			this.avg = ko.computed(() => {
				var avg = 0
				$.each(model.labels(), (index, item) => {
					avg += parseInt(item.count);
				});
				return avg / model.labels().length;
			});


			this.importantLabels = ko.computed(() => {
				return ko.utils.arrayFilter(model.labels(), (label) => {
					return label.count >= model.avg();
				});
			});

			this.nonimportantLabels = ko.computed(() => {
				return ko.utils.arrayFilter(model.labels(), (label) => {
					return label.count < model.avg();
				});
			});

		};

		ko.applyBindings(new ViewModel({
			"posts": years,
			"labels": labels
		}));

		console.debug(data, years);
	});
});