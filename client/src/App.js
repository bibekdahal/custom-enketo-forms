import React, { useRef, useEffect } from 'react';
import { Form } from 'enketo-core';
import 'enketo-core/src/sass/formhub/formhub.scss';



const xform = {'form': '<form xmlns:xf="http://www.w3.org/2002/xforms" xmlns:orx="http://openrosa.org/xforms" xmlns:enk="http://enketo.org/xforms" xmlns:odk="http://www.opendatakit.org/xforms" xmlns:kb="http://kobotoolbox.org/xforms" xmlns:esri="http://esri.com/xforms" xmlns:oc="http://openclinica.org/xforms" xmlns:h="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:jr="http://openrosa.org/javarosa" autocomplete="off" novalidate="novalidate" class="or clearfix" dir="ltr" id="tmp0b3p1d0e">\n<!--This form was created by transforming a OpenRosa-flavored (X)Form using an XSL stylesheet created by Enketo LLC.--><section class="form-logo"> </section><h3 dir="auto" id="form-title">Test form</h3>\n  \n  \n    <label class="question non-select "><span lang="" class="question-label active">Name</span><input type="text" name="/tmp0b3p1d0e/name" data-type-xml="string"/></label>\n    <label class="question non-select "><span lang="" class="question-label active">Age</span><input type="number" name="/tmp0b3p1d0e/age" data-constraint=". &gt;= 3" data-type-xml="int"/><span class="or-constraint-msg active" lang="" data-i18n="constraint.invalid">Value not allowed</span></label>\n  \n<fieldset id="or-preload-items" style="display:none;"><label class="calculation non-select "><input type="hidden" name="/tmp0b3p1d0e/meta/instanceID" data-preload="uid" data-preload-params="" data-type-xml="string"/></label></fieldset></form>', 'model': '<model xmlns="http://www.w3.org/2002/xforms" xmlns:xf="http://www.w3.org/2002/xforms" xmlns:h="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><instance>\n        <tmp0b3p1d0e xmlns:jr="http://openrosa.org/javarosa" xmlns:orx="http://openrosa.org/xforms" xmlns:odk="http://www.opendatakit.org/xforms" id="tmp0b3p1d0e">\n          <name/>\n          <age/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </tmp0b3p1d0e>\n      </instance></model>'};
const html = {'__html': xform.form};


function App() {
    const formContainer = useRef(null);
    const form = useRef(null);
    const data = {
        modelStr: xform.model,
        // instanceStr: initialData,
    };

    useEffect(() => {
        form.current = new Form('form.or', data);
        form.current.init();
    });

    const onClick = () => {
        form.current.validate()
            .then((valid) => {
                console.log(valid);

                // result = form.current.getDataStr();
                // form.current.resetView();
            });
    };


  return (
    <div className="App">
        <div
            ref={formContainer}
            dangerouslySetInnerHTML={html}
        />
        <button onClick={onClick}>Submit</button>
    </div>
  );
}

export default App;
