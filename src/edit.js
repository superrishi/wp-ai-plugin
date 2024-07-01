/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUpload, InspectorControls, ColorPalette, RichText, URLInputButton } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl  } from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { backgroundImage, backgroundColor, title, description, ctaText, ctaUrl } = attributes;

	const onSelectImage = (media) => {
		setAttributes({ backgroundImage: media.url });
	};

	const onChangeBackgroundColor = (color) => {
		setAttributes({ backgroundColor: color });
	};

	const onChangeTitle = (value) => {
        setAttributes({ title: value });
    };

    const onChangeDescription = (value) => {
        setAttributes({ description: value });
    };

    const onChangeCtaText = (value) => {
        setAttributes({ ctaText: value });
    };

    const onChangeCtaUrl = (value) => {
        setAttributes({ ctaUrl: value });
    };

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Background Image Settings', 'wp-ai-plugin')}>
					<PanelRow>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={['image']}
							value={backgroundImage}
							render={({ open }) => (
								<Button onClick={open}>
									{backgroundImage ? __('Change Image', 'wp-ai-plugin') : __('Select Image', 'wp-ai-plugin')}
								</Button>
							)}
						/>
					</PanelRow>
					<PanelRow>
						<ColorPalette
							value={backgroundColor}
							onChange={onChangeBackgroundColor}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps()}
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
				<RichText
                    tagName="h2"
                    value={title}
                    onChange={onChangeTitle}
                    placeholder={__('Title', 'wp-ai-plugin')}
                    style={{ marginBottom: '1rem' }}
                />
                <RichText
                    tagName="p"
                    value={description}
                    onChange={onChangeDescription}
                    placeholder={__('Description', 'wp-ai-plugin')}
                    style={{ marginBottom: '1rem' }}
                />
                <TextControl
                    label={__('Button Text', 'wp-ai-plugin')}
                    value={ctaText}
                    onChange={onChangeCtaText}
                    style={{ marginBottom: '1rem' }}
                />
                <URLInputButton
                    url={ctaUrl}
                    onChange={onChangeCtaUrl}
                />
			</div>
		</>
	);
}
