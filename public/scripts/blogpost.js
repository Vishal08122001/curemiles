// Generate Table of Contents
document.addEventListener("DOMContentLoaded", () => {
	const article = document.querySelector(".post-content");
	const toc = document.querySelector(".toc-content");
	const tocContainer = document.querySelector(
		".table-of-contents",
	);

	if (article && toc) {
		const headings = article.querySelectorAll("h2, h3");
		if (headings.length > 0) {
			const tocList = document.createElement("ul");

			headings.forEach((heading, index) => {
				const id = `heading-${index}`;
				heading.id = id;

				const li = document.createElement("li");
				const a = document.createElement("a");
				a.href = `#${id}`;
				a.textContent = heading.textContent || "";
				a.className = heading.tagName.toLowerCase();

				li.appendChild(a);
				tocList.appendChild(li);
			});

			toc.appendChild(tocList);
		} else if (tocContainer) {
			tocContainer.style.display = "none";
		}
	}
});

// Share functionality
document.addEventListener('DOMContentLoaded', () => {
	const copyLinkBtn = document.querySelector('.copy-link-btn');
	if (copyLinkBtn) {
		copyLinkBtn.addEventListener('click', async () => {
			try {
				await navigator.clipboard.writeText(window.location.href);
				const span = copyLinkBtn.querySelector('span');
				if (span) {
					const originalText = span.textContent;
					span.textContent = 'Copied!';
					copyLinkBtn.classList.add('copied');
					setTimeout(() => {
						span.textContent = originalText;
						copyLinkBtn.classList.remove('copied');
					}, 2000);
				}
			} catch (err) {
				console.error('Failed to copy link:', err);
				alert('Failed to copy link. Please try again.');
			}
		});
	}
});

document
	.querySelectorAll(".share-btn[data-platform]")
	.forEach((btn) => {
		btn.addEventListener("click", () => {
			const platform = btn.getAttribute("data-platform");
			const url = encodeURIComponent(window.location.href);
			const text = encodeURIComponent(document.title);

			let shareUrl = "";
			if (platform === "twitter") {
				shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
			} else if (platform === "linkedin") {
				shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
			}

			if (shareUrl) {
				window.open(
					shareUrl,
					"_blank",
					"width=600,height=400",
				);
			}
		});
	});
