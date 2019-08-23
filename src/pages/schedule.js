import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import ScheduleContent from 'components/ScheduleContent'
function SchedulePage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<ScheduleContent />
		</Layout>
	)
}
SchedulePage.propTypes = {
	location: PropTypes.object,
}
export default SchedulePage
