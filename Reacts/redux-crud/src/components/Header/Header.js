import React from 'react'
import PageHeader from 'antd/es/page-header'
function Header({title}) {
    return (
        <div>
            <PageHeader ghost={false} title={title}></PageHeader>
        </div>
    )
}

export default Header
