import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import MediaContent from 'components/MediaContent'

function MediaPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<MediaContent />
		</Layout>
	)
}
MediaPage.propTypes = {
	location: PropTypes.object,
}
export default MediaPage
