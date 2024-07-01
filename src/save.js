/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { backgroundImage, backgroundColor, title, description, ctaText, ctaUrl } = attributes;

	return (
		<div
			{...useBlockProps.save()}
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundColor: backgroundColor,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '300px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
				flexDirection: 'column',
				textAlign: 'center',
			}}
		>
			<RichText.Content
				tagName="h2"
				value={title}
				style={{ marginBottom: '1rem' }}
			/>
			<RichText.Content
				tagName="p"
				value={description}
				style={{ marginBottom: '1rem' }}
			/>
			<a
				href={ctaUrl}
				style={{
					display: 'inline-block',
					padding: '0.5rem 1rem',
					backgroundColor: '#007cba',
					color: '#fff',
					textDecoration: 'none',
					borderRadius: '4px',
				}}
			>
				{ctaText}
			</a>
		</div>
	);
}
