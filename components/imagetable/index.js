import React from 'react'
import { Router } from '../../routes';

import ReactTable from "react-table";
import { stylesheet } from 'react-table/react-table.css';

const ImageTable = ({ images, selectItem }) => (

    <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <ReactTable
            filterable
            defaultFilterMethod={(filter, row) =>
            row[filter.id].toString().includes(filter.value)}
            getTdProps={(state, rowInfo, column, instance) => {
                return {
                  onClick: (e, handleOriginal) => {

                    const { row } = rowInfo;

                    selectItem(row.imageDigest);
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
                        },
                        {
                            Header: "Digest",
                            accessor: "imageDigest"
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