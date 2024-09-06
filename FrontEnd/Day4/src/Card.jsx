import { CCard,CRow,CCol,CCardBody,CCardImage,CCardTitle,CCardText } from "@coreui/react";
function Card() {
  return (
    <div>
        <CCard className="mb-3" style={{ maxWidth: '540px' }}>
            <CRow className="g-0">
            <CCol md={4}>
                <CCardImage src={""} />
            </CCol>
            <CCol md={8}>
                <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.
                    </CCardText>
                    <CCardText>
                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </CCardText>
                </CCardBody>
            </CCol>
            </CRow>
        </CCard>
    </div>
  )
}

export default Card;