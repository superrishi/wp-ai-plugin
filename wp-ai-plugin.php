<?php
/**
 * Plugin Name:       WP AI Plugin
 * Description:       A WordPress Block Plugin with a few demonstratable skill.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Akash Sharma
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-ai-plugin
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

class WP_AI_Plugin {
	public static function init()
	{
		add_action( 'init', array('WP_AI_Plugin', 'create_block_wp_ai_plugin_block_init') );
	}

	public static function create_block_wp_ai_plugin_block_init() {
		register_block_type( __DIR__ . '/build' );
	}
}

add_action('plugins_loaded',array('WP_AI_Plugin', 'init'));