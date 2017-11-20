export const IMAGE_ANALYZED = 'analyzed';

export function mapImages(images) {

    return images.map(image => {

        return {
            analyzed: image.analysis_status === IMAGE_ANALYZED,
            createdAt: image.created_at,
            lastUpdated: image.lastUpdated,
            type: image.image_type,
            imageDigest: image.imageDigest,
            //meta props
            ...mapImageMeta(image.image_content),
            //detail props
            ...mapImageDetail(image.image_detail)
        };

    });
};

export function mapImageMeta({ meta }) {
    if(!meta)
        return {};

    return {
        architecture: meta.arch,
        distro: meta.distro,
        distroVersion: meta.distro_version,
        imageSize: meta.image_size,
        layerCount: meta.layer_count
    };
}

export function mapImageDetail([detail]){

    return {
        imageId: detail.imageId,
        registry: detail.registry,
        repo: detail.repo,
        tag: detail.tag
    };
}

export function mapVulnGroups(apiData){

    if (!apiData || !apiData.length)
        return [];

    const allSeverity = apiData.map(vuln => vuln.severity);

    const distinctVals = [...new Set(allSeverity)];

    return distinctVals; 
}