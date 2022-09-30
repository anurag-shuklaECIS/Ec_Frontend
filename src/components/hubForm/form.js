import React from 'react';
import HubspotForm from 'react-hubspot-form';


function email() {
  return (
    <div style={{width:'95%'}}>
      <HubspotForm
                portalId='9316836'
                formId='4285ca50-d901-4d45-9f19-506d86da925c'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
    </div>
  )
}

export default email