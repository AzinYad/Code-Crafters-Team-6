import React from "react";

function CreateEnergiserForm() {
    return (
        <div>
            <form className="create-form">
                <section className="flex-sec fullname">
                    <label htmlFor="fullname">Creator’s Name :</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fulltName"
                    />
                </section>

                <section className="flex-sec url-input">
                    <label htmlFor="url-input">Insert a URL:</label>
                    <input
                        type="text"
                        placeholder="Insert a URL"
                        name="urlInput"
                    />
                </section>

                <section className="flex-sec description">
                    <label htmlFor="description">Energiser Description:</label>
                    <textarea
                        placeholder="Add some description about this energiser..."
                        name="description"
                    />
                </section>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default CreateEnergiserForm;