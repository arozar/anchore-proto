import React from 'react'

import ReactTable from "react-table";
import { stylesheet } from 'react-table/react-table.css';

const ImageTable = ({ images }) => (

    <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <ReactTable
            getTdProps={(state, rowInfo, column, instance) => {
                return {
                  onClick: (e, handleOriginal) => {
                    console.log('It was in this row:', rowInfo.row)
            
                    // IMPORTANT! React-Table uses onClick internally to trigger
                    // events like expanding SubComponents and pivots.
                    // By default a custom 'onClick' handler will override this functionality.
                    // If you want to fire the original onClick handler, call the
                    // 'handleOriginal' function.
                    if (handleOriginal) {
                      handleOriginal()
                    }
                  }
                }
              }}
            data={images}
            columns={[
                {
                    Header: "Repo",
                    columns: [
                        {
                            Header: "Repo",
                            accessor: "repo"
                        },
                        {
                            Header: "Tag",
                            id: "tag",
                            accessor: d => d.tag
                        },
                        {
                            Header: "Registry",
                            accessor: "registry"
                        },
                        {
                            Header: "Id",
                            accessor: "imageId"
                        }
                    ]
                },
                {
                    Header: "Info",
                    columns: [
                        {
                            Header: "Age",
                            accessor: "age"
                        },
                        {
                            Header: "Status",
                            accessor: "status"
                        }
                    ]
                },
                {
                    Header: 'Stats',
                    columns: [
                        {
                            Header: "Visits",
                            accessor: "visits"
                        }
                    ]
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
        <br />
    </div>
);

export default ImageTable;