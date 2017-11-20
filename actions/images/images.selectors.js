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

export function mapImageDetail(details){

    const detail = getLatestbyDate(details);
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

    return ['any',...distinctVals]; 
}

export function getLatestbyDate(details){
    
        if(!details || !details.length)
            return;
    
        if(details.length === 1)
            return details[0];
    
        details.sort((current, next) => {
    
            const currentDateString = current.last_updated || current.created_at;
    
            const nextDateString = next.last_updated || next.created_at;
    
            return new Date(currentDateString) - new Date(nextDateString);
        });
    
        return details[details.length - 1];
    }