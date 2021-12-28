type ReportType = {
    _id: any,
    title: string,
    authorId: string,
    description: string,
    active: boolean,
    recived: boolean,
    solved: boolean,
    underInvestigation: boolean,
    created: Date,
    admin: boolean,
}

export default ReportType;